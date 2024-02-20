import {ArgumentParser} from 'argparse';

const parser = new ArgumentParser({
    description: 'Asimple command line utility'
});

parser.add_argument('-f', '--foo', {help:'enter some value'});
parser.add_argument('-g', {help:'enter some value of g'});
console.log(parser.parse_args());
let args = parser.parse_args();
console.log(args.g);
