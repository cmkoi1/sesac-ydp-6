console.log('!')

function uploadThumbnail() {
    // FormData 객체
    // : 폼 전송할 때, 멀티미디어 파일을 비동기로 제출하고 싶다면.. FormData 객체를 이용
    const formData = new FormData();

    // 폼 요소를 선택
    const fileInput = document.querySelector('#thumbnail');
    console.dir(fileInput);
    console.dir(fileInput.files); // 업로드한 파일 정보

    // FormData에 업로드한 파일 정보를 추가
    formData.append('thumbnail', fileInput.files[0]);
    // console.log(formData); // FormData는 특수한 형태의 객체이기 때문에 쉽게 출력 x

    // 서버로 요청 보내기
    axios({
        method: 'POST',
        url: '/dynamicFile',
        data: formData,
        // key
        headers: {
            'Content-Type': 'multipart/form-data', // enctype="multipart/form-data"
        }
    }).then(function (res) {
        // 서버의 req.file을 클라이언트의 res 변수가 받음
        console.log(res);
        console.log(res.data.path); // 이미지 주소

        // img태그의 src 속성값에 이미지 주소를 부여
        document.querySelector('img').src = `/${res.data.path}`;

        // img태그에 thumbnail 클래스명 부여
        document.querySelector('img').classList.add('thumbnail');
    })

}


function uploadPractice() {
    const formData2 = new FormData();
    const practiceInput = document.querySelector('#practiceFile');
    // console.dir(practiceInput);
    // console.dir(practiceInput.files);

    formData2.append('practiceFile', practiceInput.files[0]);
    axios({
        method: 'POST',
        url: '/upload/practice',
        data: formData2,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(function (res) {
        console.log(res);
        console.log(res.data.path); // 이미지 주소
        document.querySelector('img').src = `/${res.data.path}`;
        document.querySelector('img').classList.add('practiceFile');
        document.querySelector('h4').textContent = "님 환영합니다!"
        document.querySelector('#pw').textContent = "비밀번호: "
        document.querySelector('#name').textContent = "이름: "
        document.querySelector('#age').textContent = "나이: "
    })

}

