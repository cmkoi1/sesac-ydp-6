// es6 module 형식으로 확장자 mjs 사용, 모듈을 가져올 때 import 사용.
// 실행 시 확장자를 명시해야 한다.
// 프로젝트로 es6을 작성할 때는 package.json에 "type": "module"을 적어야 한다.
const add = (a, b) => {
    return a+b;
}
export default add;