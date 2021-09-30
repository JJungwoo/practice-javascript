# createElement 메서드와 appendChild 메서드

## createElement 메서드

HTML 문서에 새로운 HTML element(HTML 태그)를 만들어서 반환하는 메서드이다.

> 인자값으로 주어지는 tag를 인식하지 못하면 [HTMLUnknownElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement) 를 반환한다.

> appendChild 메서드나 insertBefore 메서드를 같이 활용해서 생성한 HTML element를 특정 HTML tag에 element로 붙일 수 있다.

### 문법
```javascript
let element = document.createElement(tagName[, options]);
```

## appendChild 메서드

document의 메서드 중 appendChild 메서드는 호출하는 element의 자식 element 리스트에 마지막 자식으로 입력된 인자값을 추가하는 메서드이다.

### 문법 
```javascript
var aChild = element.appendChild(aChild);
```

### 사용법
```javascript
// 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙입니다.
var p = document.createElement("p");
document.body.appendChild(p);
```

## 주의 사항

### cloneNode 메서드를 사용하면 복제하는 element에 appendChild 메서드로 추가했던 element는 추가되기 전 상태가 복제된다.

```javascript
<body>
<form id="test" style="color: blue;" onclick="appendChildTest()">
  목록 추가하기
</form>

<script>
  function appendChildTest () {
    const test = document.querySelector("#test")
    const span = document.createElement("span")
    span.innerText = "테스트 성공"
    const li = document.createElement("li")
    li.appendChild(span)

    const cloneTest = li.cloneNode()

    test.appendChild(li)
    test.appendChild(cloneTest)
  }
</script>
</body>
```

위 코드의 동작은 다음과 같다.

![image](https://user-images.githubusercontent.com/22315365/135491566-46fc8624-fb72-4272-900a-ecd18ccbbe83.png)

목록 추가하기를 눌렀을 때 새로운 element가 form에 추가가 되는데 이때, 자바 스크립트 코드의 li는 추가했던 span와 "테스트 성공" 이라는 문장이 제대로 찍한다.
cloneTest는 li를 cloneNode 메서드로 복제하고 똑같이 appendChild 하면 span이 추가되지 않은 상태로 찍힌것을 확인할 수 있다.

그렇기 때문에 cloneNode 메서드는 appendChild 메서드를 호출하기 전에 미리 복제를 해줘야 이런 문제가 발생하지 않는다.

### appendChild 메서드는 메서드 체이닝을 통해 호출하면 위험하다.

위 예시를 재사용해서 해당 주의사항을 설명한다.

#### 1)

```javascript
<form id="test" style="color: blue;" onclick="appendChildTest()">
  목록 추가하기
</form>
<script>
  function appendChildTest () {
    const test = document.querySelector("#test")
    const span = document.createElement("span")
    span.innerText = "테스트 성공"
    const li = document.createElement("li")
    li.appendChild(span)
    test.appendChild(li)
  }
</script>
```

#### 2)

```javascript
<form id="test" style="color: blue;" onclick="appendChildTest()">
  목록 추가하기
</form>
<script>
  function appendChildTest () {
    const test = document.querySelector("#test")
    const span = document.createElement("span")
    span.innerText = "테스트 성공"
    const li = document.createElement("li").appendChild(span)
    test.appendChild(li)
  }
</script>
```

위 예시 1, 2의 실행 결과는 충격적으로 다르다.

#### 1번 코드 실행 결과

![image](https://user-images.githubusercontent.com/22315365/135491506-7e873050-515a-4e31-8588-16368cdc8cd7.png)

#### 2번 코드 실행 결과

![image](https://user-images.githubusercontent.com/22315365/135491412-f4dc48f7-ed54-4e3a-aaa3-17654b41510f.png)

????? 왜 그런걸까 -_-;; 굳이 const 로 선언해서 추가해야하나 싶어서 메서드를 체이닝 호출하였는데 결과가 완전히 생각한것과 달라서 너무 당황스러웠다.

찾아보니 다행히도?? [stackoverflow](https://stackoverflow.com/questions/41977192/why-appendchild-overrides-createelement-if-it-was-chained-at-the-end-of-it)에 나와 같이 문제가 발생했던 사람이 있었다.

결론은 **appendChild 메서드는 실행 후 리턴값으로 입력 받은 인자값을 반환한다.** 그렇기 때문에 2번 코드에서 체이닝 호출을 했을 때 span 값만 리턴되서 span만 추가가 되는 것이다.

다른 사람들은 이런 시행착오를 겪지 않을거라 생각한다. 하지만.. 나와같이 자바스크립트를 많이 접해보지 못했던 사람들에게 조금이라도 도움이 되었으면 한다. (+ 궁금한건 그냥 넘어갈 수 없었다..)

## 참고 : 
- https://developer.mozilla.org/ko/docs/Web/API/Document/createElement
- https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild
