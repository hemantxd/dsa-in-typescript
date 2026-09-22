/**
 * DAY 1 — Stack fundamentals: build your own generic Stack<T>.
 * ----------------------------------------------------------------
 * Read this file first. It explains each method as it is defined.
 * Run it to see every operation in action:
 *
 *   npx ts-node src/11-stack/basics/Stack.ts
 *
 * THE BIG IDEA
 * A stack only touches ONE end (the "top"). With an array, the top is
 * the END of the array: push/pop at the end are O(1) because no other
 * elements ever need to move. (Never use index 0 as the top — shift()
 * moves every element and costs O(n).)
 */
export class Stack<T> {
  private items: T[] = [];

  /** Put a value on top. O(1) amortized (array may occasionally resize). */
  push(value: T): void {
    this.items.push(value);
  }

  /**
   * Remove the top value and return it.
   * Returns undefined when the stack is empty — so callers must check
   * isEmpty() first (or handle undefined). O(1).
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /** Look at the top value WITHOUT removing it. O(1). */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /** True when there is nothing to pop/peek. O(1). */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /** How many values are stored. O(1). */
  size(): number {
    return this.items.length;
  }
}

export class Stack2<T>{
  private items: T[] = [];
  
  push(value: T): void{
    this.items.push(value);
  }
}

// ---------- GUIDED TOUR (runs only when you execute THIS file) ----------

function tour() {
  const stack = new Stack<number>();

  console.log("isEmpty:", stack.isEmpty()); // true — nothing stored yet

  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("after pushes, peek:", stack.peek(), "| size:", stack.size()); // 30, 3

  console.log("pop:", stack.pop()); // 30 (last in, first out!)
  console.log("pop:", stack.pop()); // 20
  console.log("peek (no removal):", stack.peek()); // 10 — still there
  console.log("size:", stack.size()); // 1

  stack.pop();
  console.log("empty now:", stack.isEmpty()); // true
  console.log("pop on empty:", stack.pop()); // undefined — never crashes
}

// importers (solution files) reuse the class without re-running the tour
if (require.main === module) {
  tour();
}
