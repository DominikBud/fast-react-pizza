function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="/cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;