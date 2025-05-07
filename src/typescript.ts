{
  function formatString(input: string, toUpper: boolean = true): string {
    const result = toUpper ? input.toUpperCase() : input.toLowerCase();
    return result;
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  



}
