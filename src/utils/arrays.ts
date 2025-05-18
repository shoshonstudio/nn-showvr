export const groupItemsByKeys = (
    items: { group?: string; colapse?: string; [key: string]: any }[]
  ): any[][] => {
    const result: any[][] = [];
    const seenGroups: Set<string> = new Set();
  
    items.forEach((item) => {
      const key = item.group || item.colapse; // Use `group` or `colapse` as the grouping key
  
      if (key) {
        if (!seenGroups.has(key)) {
          // Find all items with the same group or colapse key
          const groupItems = items.filter((i) => (i.group || i.colapse) === key);
          result.push(groupItems);
          seenGroups.add(key);
        }
      } else {
        result.push([item]); // Items without `group` or `colapse` go into their own array
      }
    });
  
    return result;
  };

  export const filterKeysFromObject = (obj: any, keys: string[]) => {

  const filtered = Object.keys(obj ?? {}).reduce((res:any, key:string) => { 
    if (!keys.includes(key)) {
      res[key] = obj[key];
    }
    return res;
  }, {})

  return filtered
}