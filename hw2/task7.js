// Создайте объект, представляющий банковское приложение, с функциональностью управления банковскими счетами и транзакциями. Объект должен содержать информацию о клиентах, их счетах и истории транзакций. Напишите методы для создания нового клиента, открытия нового счета, выполнения транзакций (переводы, пополнения, списания) и вывода истории транзакций для конкретного счета.

const bank = {
    clients: {},
    accounts: {},
    transactions: [],
    // генерация уникального айди клиента
    generateUniqueClientId: () => {
        let id = 0;
        do {
            // id = Math.trunc(Math.random() * 10000);
            id++;
        } while (id in bank.clients);

        return id;
    },
    // генерация уникального айди счета
    generateUniqueAccountId: () => {
        let id = 0;
        do {
            // id = Math.trunc(Math.random() * 10000);
            id++;
        } while (id in bank.accounts);

        return id;
    },
    // генерация уникального айди транзакции
    generateUniqueTransactionId: () => {
        let id = 0;
        do {
            // id = Math.trunc(Math.random() * 10000);
            id++;
        } while (id in bank.transactions);

        return id;
    },
    //  создание клиента
    createClient: (name) => {
        const id = bank.generateUniqueClientId();
        const client = {
            id: id,
            name: name,
            accounts: {}
        };
        bank.clients[id] = client;

        return client;
    },
    //  получение клиента по айди
    getClientById: (id) => {
        if (!(id in bank.clients)) throw new Error("Client does not exists!")

        return bank.clients[id];
    },
    //  получение счета по айди
    getAccountById: (id) => {
        if (!(id in bank.accounts)) throw new Error("Account does not exists!")

        return bank.accounts[id];
    },
    //  открытие счета
    openAccount: (client) => {
        let accountId = bank.generateUniqueAccountId();
        const account = {
            clientId: client.id,
            accountId: accountId,
            balance: 0,
            transactions: []
        };
        client.accounts[accountId] = account;
        bank.accounts[accountId] = account;

        return account;
    },
    //  пополнение
    deposit: (account, amount) => {
        account.balance += amount;
        bank.logTransaction(account, amount, 'deposit');

        return account;
    },
    //  списание
    withdraw: (account, amount) => {
        account.balance -= amount;
        bank.logTransaction(account, amount, 'withdraw');

        return account;
    },
    //  перевод
    transfer: (fromAccount, toAccount, amount) => {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        bank.logTransaction(fromAccount, amount, 'transfer');
        bank.logTransaction(toAccount, amount, 'transfer');

        return fromAccount;
    },
    //  логирование транзакции
    logTransaction: (account, amount, type) => {
        const client = bank.getClientById(account.clientId);
        const transaction = {
            id: bank.generateUniqueTransactionId(),
            clientId: account.clientId,
            accountId: account.accountId,
            amount: amount,
            type: type,
            date: new Date()
        };
        bank.transactions.push(transaction);

        return transaction;
    },
    //  вывода истории транзакций для конкретного счета по айди
    getTransactionsByAccountId: (accountId) => {
        const account = bank.getAccountById(accountId);

        return Object(bank.transactions).filter((transaction) => transaction.accountId === account.accountId);
    },
    //  вывода истории транзакций для конкретного счета
    getTransactionsByAccount: (account) => {
        return bank.getTransactionsByAccountId(account.accountId);
    },
    //  вывода истории транзакций для конкретного счета по айди
    getTransactionsByClientId: (clientId) => {
        const client = bank.getClientById(clientId);

        return Object(bank.transactions).filter((transaction) => transaction.clientId === client.id);
    },
    //  вывода истории транзакций для конкретного счета
    getTransactionsByClient: (client) => {
        return bank.getTransactionsByClientId(client.id);
    }
}
bank.createClient('Bishop');
bank.createClient('Igor');
bank.createClient('Vadim');

const client1 = bank.getClientById(1);
const client2 = bank.getClientById(2);
const client3 = bank.getClientById(3);

bank.openAccount(client2);
bank.openAccount(client1);
bank.openAccount(client3);

const accountId = 2; // 0 Error: Account does not exists!
const accountId2 = 1;

const account1 = bank.getAccountById(accountId);
const account2 = bank.getAccountById(accountId2);

console.log(account1.balance, account2.balance); // 0 0
bank.deposit(account1, 1000);
bank.deposit(account2, 1000);
bank.deposit(account1, 1000);

console.log(account1.balance, account2.balance); // 2000 1000

bank.withdraw(account1, 500);
bank.withdraw(account2, 500);
bank.withdraw(account1, 500);
console.log(account1.balance, account2.balance); // 1000 500

bank.transfer(account1, account2, 500);
console.log(account1.balance, account2.balance); // 500 1000

console.log(bank);
console.log(client1);
console.log(client2);

console.log(bank.getTransactionsByAccountId(1));
console.log(bank.getTransactionsByAccount(account1));

console.log(bank.getTransactionsByClientId(1));
console.log(client2);
console.log(bank.getTransactionsByClient(client2));