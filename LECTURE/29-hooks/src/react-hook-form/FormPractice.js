import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onValid = (data) => {
        console.log('onValid >>>>> ', data); // {username: '안녕'}
    };

    const onInValid = (err) => {
        console.log('onInValid >>>>> ', err);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input
                    type="text"
                    placeholder="username"
                    {...register('username', {
                        required: '이름은 필수 항목입니다.',
                    })}
                />
                {errors.username?.message}
                <input type='text' {...register("age", { validate: value => value >= 0 || "0 이상의 숫자만 입력 가능합니다." })}></input>
                {errors.age?.message}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
