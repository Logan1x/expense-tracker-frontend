import axios from "axios"

const getTransaction = async () => {
    return await axios({
        method: "get",
        url: "http://localhost:7000/transactions",
      });
}

const postTransaction = async (data:{expenseName: string, expenseAmount: number}) => {
    return await axios({
        method: "post",
        url: "http://localhost:7000/transactions",
        data: {...data}
        });
}

const deleteTransaction = async (id: number) => {
    return await axios({
        method: "delete",
        url: "http://localhost:7000/transactions",
        data: {id}
        });
}

export { getTransaction, postTransaction, deleteTransaction }