<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CartController extends Controller
{
    public function index()
    {
        $items = CartItem::query()
            ->where('user_id', Auth::id())
            ->orderByDesc('created_at')
            ->get();

        return response()->json([
            'items' => $items,
            'count' => $items->sum('qty'),
            'total' => $items->sum(fn ($item) => $item->qty * $item->price),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'product_name' => ['required', 'string', 'max:255'],
            'product_image' => ['nullable', 'string', 'max:2048'],
            'price' => ['required', 'numeric', 'min:0'],
            'qty' => ['nullable', 'integer', 'min:1', 'max:99'],
        ]);

        $userId = Auth::id();
        $productKey = Str::slug($data['product_name'].'-'.$data['price']);
        $qty = (int) ($data['qty'] ?? 1);

        $item = CartItem::firstOrNew([
            'user_id' => $userId,
            'product_key' => $productKey,
        ]);

        $item->product_name = $data['product_name'];
        $item->product_image = $data['product_image'] ?? null;
        $item->price = (int) $data['price'];
        $item->qty = ($item->exists ? $item->qty : 0) + $qty;
        $item->save();

        return response()->json([
            'message' => 'Produk ditambahkan ke keranjang',
            'count' => CartItem::where('user_id', $userId)->sum('qty'),
        ]);
    }

    public function update(Request $request, CartItem $cartItem)
    {
        abort_unless($cartItem->user_id === Auth::id(), 403);

        $data = $request->validate([
            'qty' => ['required', 'integer', 'min:1', 'max:99'],
        ]);

        $cartItem->update([
            'qty' => $data['qty'],
        ]);

        return response()->json([
            'message' => 'Keranjang diperbarui',
            'count' => CartItem::where('user_id', Auth::id())->sum('qty'),
        ]);
    }

    public function destroy(CartItem $cartItem)
    {
        abort_unless($cartItem->user_id === Auth::id(), 403);

        $cartItem->delete();

        return response()->json([
            'message' => 'Produk dihapus dari keranjang',
            'count' => CartItem::where('user_id', Auth::id())->sum('qty'),
        ]);
    }

    public function checkout()
    {
        $items = CartItem::query()->where('user_id', Auth::id())->get();

        if ($items->isEmpty()) {
            return response()->json([
                'message' => 'Keranjang masih kosong',
            ], 422);
        }

        $total = $items->sum(fn ($item) => $item->qty * $item->price);
        CartItem::where('user_id', Auth::id())->delete();

        return response()->json([
            'message' => 'Checkout berhasil',
            'total' => $total,
        ]);
    }
}
