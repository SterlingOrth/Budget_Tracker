import { checkForIndexedDb, useIndexedDb } from "./indexedDb";
import { renderArticles } from "./domMethods";

function loadPage() {
  if (checkForIndexedDb()) {
    useIndexedDb("transactions", "TransactionStore", "get").then((results) => {
      results.forEach((transaction) => {
        transaction.transaction = true;
      });
      renderArticles(results, loadPage);
    });
  }
}

loadPage();
