export function countMaxBobsleigh(N,map) {
    let y = 0
    let acc = 0
    let point = 0
    if (!map || !N || !map && !N) {
        return 0
    }
    else{

        if (N<4) {
            return 0
        }
        else{
            for(let i = 0 ; i<N ; i++){
                while(y<N){
                    if (map[i][y] == '.' && map[i][y+1] == '.') {
                        point++
                    }
                    else {
                        point = 0
                    }
                    if (point == 3) {
                        acc ++
                        point = 0
                    }
                    if (y==N-1) {
                        y=0
                        break
                    }
                    y++
                }
            }
            return acc
        }
    }
}
console.log(countMaxBobsleigh(5,[
    '....X',
    'X....',
    '.....',
    '..X..',
    'X...X'
]));
