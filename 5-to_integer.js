const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
    console.log("Not a Number");
} else {
    console.log('My number: ${arg}');
}

