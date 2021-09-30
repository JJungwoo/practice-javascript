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

### cloneNode 메서드를 사용하면 appendChild 했던 element는 추가되기 전 상태가 복제된다.

### appendChild 메서드는 메서드 체이닝을 통해 호출하면 위험하다.

## 참고 : 
https://developer.mozilla.org/ko/docs/Web/API/Document/createElement
https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild
