import { createSlice } from '@reduxjs/toolkit';

// #1. 슬라이스 생성
const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: true, // #3. 초기값 설정
    reducers: {
        changeVisibility: (state) => !state, // #2. 액션 생성자 및 리듀서 통합
    },
});

// 액션 생성자 내보내기
export const { changeVisibility } = visibilitySlice.actions;

// 리듀서 내보내기
export default visibilitySlice.reducer;