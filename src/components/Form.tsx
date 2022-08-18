import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { postTransaction } from "../utils/utilsFuncs";

type FormValues = {
  expenseName: string;
  expenseAmount: number;
};

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await postTransaction(data);
    console.log(res);
    reset();
  };

  return (
    <div className="w-1/4 mx-auto">
      <form
        action=""
        className="flex flex-col  justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="" className="text-left py-1">
          {" "}
          Expanse Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 px-2 py-3 rounded"
          {...register("expenseName")}
        />

        <label htmlFor="" className="text-left py-1">
          {" "}
          Expanse Amount
        </label>
        <input
          type="text"
          placeholder="Amount"
          className="border border-gray-400 px-2 py-3 rounded"
          {...register("expenseAmount")}
        />

        <button
          type="submit"
          className="my-2 bg-gray-700 text-white py-3 px-2 rounded "
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export { Form };
