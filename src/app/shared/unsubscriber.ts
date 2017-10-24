export function unsubscriber(subscriptions): void {
    for (const sub of subscriptions) {
      sub.unsubscribe();
    }
  }
