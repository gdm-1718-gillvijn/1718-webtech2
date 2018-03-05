

for(let i = 7; i <=100; i++) {

    //document.write(i + '<br>')

    //indien niet deelbaar door 3
    //of indien niet deelbaar door 5

    if(i%3 != 0 || i%5 != 0) {
        document.write(i+ '<br>')
    }
    if(i%3 == 0) {
        document.write('bitter');
    }
    if(i%5 == 0) {
        document.write('bal');
    }

    document.write('<br>')
}