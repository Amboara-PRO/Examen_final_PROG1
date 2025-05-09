function reduceDirections(directions) {
    const nord = 'NORD'
    const sud = 'SUD'
    const est = 'EST'
    const ouest = 'OUEST'
    let i = 0
    if (!directions) {
        return []
    }
    else{

        while (true) {
            if (directions[i]=='SUD' && directions[i+1]=='NORD' || directions[i]=='NORD' && directions[i+1]=='SUD' ||
            directions[i]=='EST' && directions[i+1]=='OUEST' || directions[i]=='OUEST'&& directions[i+1]=='EST') {
                directions.splice(i,2)
                i=0
            }
            else{
                i++
            }
            if (i>directions.length) {
                break
            }
        }
    }
    return directions
}
console.log(reduceDirections(['SUD','OUEST']));
