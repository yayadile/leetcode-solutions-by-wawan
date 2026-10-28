function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
}