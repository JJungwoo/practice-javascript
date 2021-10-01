# CSS 처음 사용할 때 꼭 알아두어야 할 것들

## CSS 적용하는 3가지 방법

**1. inline 방식**
  - htnml 태그에 직접 선언

```html
<!-- h1에 css 적용 -->
<h1 style="color:blue"> TEST </h1>
```

**2. internal 방식**
  - html 파일의 body 태그가 아닌 head 태그 사이에 선언

```html
<head>
    <style>
        /* h1 태그에 모두 스타일 적용 */
        h1 {
            style="color:blue"
        }
    </style>
</head>
<body>
    <h1> TEST </h1>
</body>
```

**3. external 방식**
  - 타겟 html 파일 외부에 파일로 선언

```html
<!-- todolist.css 파일을 읽어올 때 예시 -->
<link href="todolist.css" rel="stylesheet" type="text/css">
```

## 주요 선택자

### 1) 전체 선택자
HTML 페이지에 있는 모든 요소를 대상으로 스타일을 적용할 때 사용한다.

- 문법

```css
* { 스타일 }
```

- 예시

```css 
* {
    margin:0;
    padding:0
}
```

### 2) 태그 선택자
HTML 페이지의 특정 태그를 사용한 모든 요소에 스타일 적용할 때 사용한다.

- 문법

```css
태그 { 스타일 } 
```

- 예시

```css
h1 {
    color: green
}
```

### 클래스(class) 선택자
HTML 페이지에 여러번 반복할 스타일이 특정 부분으로 선택하여 적용할 때 사용한다.
클래스 선택자는 식별자 앞에 '.'을 사용하여 선언할 수 있다.

- 문법

```css
.식별자 { 스타일 }
```

- 예시

```css
.tc1 { 
    color: yellowgreen;
}
```

### id 선택자
HTML 페이지에서 한번만 스타일을 적용할 부분을 선택하여 사용한다.
id 선택자는 식별자 앞에 '#'을 사용하여 선언할 수 있다.

- 문법

```css
#식별자 { 스타일 }
```

- 예시

```css
#t1 { 
    color: yellowgreen;
}
```

### 클래스와 id 선택자 차이
클래스 선택자는 여러번 사용될 수 있지만 id 선택자는 단한번만 하나의 태그에만 사용될 수 있다. 

??? 이게 무슨말이냐?? 라고 생각할 수 있다. 적어도 나는 그렇게 생각했다... 그래서 조금 더 구체적인 예시를 보여주려한다.

```html
<head>
    <style>
    #t1 { color: yellowgreen; }
    #t2 { background-color: teal; }
    .tc1 { color: yellowgreen; }
    .tc2 { background-color: teal; }
    </style>
</head>
<body>
id 선택자 사용
<h2 id="t1 t2">test1</h2>
<h3 id="t2">test2</h3>
class 선택자 사용
<h2 class="tc1 tc2">test1</h2>
<h3 class="t2">test2</h3>
</body>
```

위 예시의 결과는 다음과 같다.

![image](https://user-images.githubusercontent.com/22315365/135563203-06f7e60e-eb46-4c0f-a92f-d5a3d7739b88.png)

id 를 중복 사용한 결과는 적용이 안되는 것을 확인할 수 있고 class만 중복 적용이 된 것을 확인할 수 있다!.

### 그룹 선택자
같은 스타일을 사용하는 선택자를 한번에 묶어서 정의하여 사용할 수 있다.
',' 값을 통해 선택자를 여러개 그룹 선택할 수 있다.

- 문법

```css
태그1, 태그2 { 스타일 }
```

- 예시

```css
h1, h2 { 
    color: blue;
}
```

> 태그 선택자 외에도 class, id 선택자 모두 사용 가능하다.

## CSS 우선 순위

### CSS 적용 계단식 (cascade) 우선순위

css 에서 계단식 우선 순위는 css 스타일이 중복 되었을 때, css의 가장 마지막에 나오는 스타일이 적용되는 것을 말한다.

```css
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
} 
```

```html
<h1>계단식 우선순위 적용 테스트</h1>
```

위의 h1 태그는 css 마지막에 선언된 blue로 스타일이 적용된다.

### CSS 선택자 적용 우선순위

같은 요소에 선택자가 겹칠 때 우선 순위는 다음과 같다.

1. inline 스타일 
2. id 스타일
3. class 스타일
4. tag 스타일

## CSS 스타일 상속(Inheritance)

부모 요소에 적용된 스타일은 자식 요소에 상속되어 적용된다.
상속 속성 설정이 가능하다. 하지만 그 내용까지는...

> 일부 속성은 상속되지 않는다. 
ex) width를 50%로 설정한다고 모든 자식 요소가 50%로 변하지 않는다.

> CSS 우선 순위 관련하여 더 자세한 내용은 다음을 참고하길 바란다.
https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
