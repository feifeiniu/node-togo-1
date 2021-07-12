const program = require('commander')



program
    .option('-x, --xxx', 'what the x')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const worlds = args.slice(0,-1).jion(' ')
        console.log(worlds);
    });
program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        // const worlds = args.slice(0,-1).jion(' ')
        console.log('clear');
    })
program.parse(process.argv);



