
// sleep 구현 3가지 방법

// 1)
const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// 2)
const timer = async () => {
    await _sleep(1000);
    console.log('First');
    await _sleep(1000);
    console.log('Second');
};

// 3)
function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
// 참고: https://multifrontgarden.tistory.com/157
 
// 방문할 배열
const visited = [
    [false, false, false, false, false],
    [false, false, false, false, false], 
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false] 
];

// 방향
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function init() {
    visited.fill(false);
}

async function setColorTable(x, y) {
    const elementId = "td" + x + y;
    console.log(elementId);
    document.getElementById(elementId).style.background = "red"; 
    sleep(100);
}

// 비동기 Promise 객체 생성
//const promise = new Promise(function(x, y) {
const promise = new Promise((x, y) => {
    const elementId = "#td" + x + y;
    console.log("promise :" + elementId);
    // document.querySelector(elementId).style.background = "red";
    // resolve(x, y);  // 비동기 콜백 함수 수행 처리 성공
});

function bfs(x, y, n) {
    init();
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length !== 0) {
        const [x, y] = queue.shift();
        setColorTable(x, y);
        console.log("x:", x,",y:", y);
        for (const [dx, dy] of dir) {
            const [nx, ny] = [x + dx, y + dy];
            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (visited[nx][ny]) continue;
            visited[nx][ny] = true;
            queue.push([nx, ny]);
        }
    }
}
