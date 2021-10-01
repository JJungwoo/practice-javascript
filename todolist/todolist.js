// document : 브라우저가 불러온 html 페이지로 페이지 내부 콘텐츠(DOM 트리)의 진입점 역할을 한다.
// querySelector : html 페이지 내부 입력한 선택자를 만족하는 Element를 반환한다.
// Element : html 페이지의 태그 (페이지 콘텐츠, DOM 트리 요소)
const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener("submit", function() {
    event.preventDefault()  // 이벤트 실행 시 자동 새로 고침 방지
    const todoInput = todoForm.querySelector("input")   // 선택한 form 태그 내부 input 태그 정보 반환
    
    if (todoInput.value === "") {
        todoInput.placeholder = "값을 입력해주세요"
        return
    }

    const todoItemSpan = document.createElement("span")
    todoItemSpan.innerText = todoInput.value
    const todoItemLi = document.createElement("li")

    // 생성한 element에 class 식별자 이름 부여하기
    todoItemSpan.className = "todoItemSpan"

    // 생성한 span element에 클릭 이벤트 추가하기
    todoItemLi.addEventListener("click", function() {
        // click 이벤트를 활용하여 toggle의 on/off 기능을 추가
        // css에서 클래스이름.chceked에 스타일 부여하면 on/off 적용 가능하다.
        todoItemLi.classList.toggle("checked");
        todoItemSpan.classList.toggle("checked");
    });

    todoItemLi.appendChild(todoItemSpan)    // appendChild : 인자값으로 들어온 Element를 하위 Element 태그로 연결

    todoList.appendChild(todoItemLi)
    todoInput.value = ""    // 이벤트 발생 이후 input 에 입력한 text 초기화
    if (todoInput.placeholder === "값을 입력해주세요") {
        todoInput.placeholder = "목록을 추가하려면 할 일을 작성하고 엔터를 누르세요"
    }
})
