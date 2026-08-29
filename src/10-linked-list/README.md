# 10 — Linked List

## Most Important Interview Questions

| # | Question | Concept You Learn | Difficulty |
|---|----------|-------------------|------------|
| 1 | Reverse Linked List | Pointer manipulation, prev/cur pattern | Easy |
| 2 | Merge Two Sorted Lists | Dummy head node technique | Easy |
| 3 | Linked List Cycle | Floyd's cycle detection (slow/fast pointers) | Easy |
| 4 | Middle of the Linked List | Slow/fast pointer trick | Easy |
| 5 | Remove Nth Node From End | Two-pointer gap technique + dummy head | Medium |
| 6 | Palindrome Linked List | Middle + reverse half + compare | Easy |
| 7 | Intersection of Two Linked Lists | Two-pointer list switching | Easy |
| 8 | Add Two Numbers | Digit-by-digit with carry | Medium |
| 9 | Remove Duplicates from Sorted List | In-place node skipping | Easy |

## Key Concepts

- **ListNode** — the basic building block: `val` + `next`. Defined once in `helpers.ts` and reused by all problems.
- **Dummy head node** — a fake node before the head that removes edge cases (merging, deleting the head).
- **Slow & fast pointers** — fast moves 2×, slow moves 1×; used to find the middle and detect cycles.
- **Floyd's cycle detection** — if fast and slow ever meet, there is a cycle. O(1) space.
- **Reversal pattern** — `save next → reverse pointer → advance prev & cur`; the single most important LL operation.
- **Gap technique** — advance fast `n` steps ahead, then move both; slow lands right before the nth-from-end node.
- **Two-pointer switching** — redirect pointers to the other list at the end to find intersections in O(1) space.

## How to Run Any File

```bash
npx ts-node src/10-linked-list/reverse-linked-list.ts
```
