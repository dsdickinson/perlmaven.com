use strict;
use warnings;

print "What is your age? ";
my $age = <STDIN>;
if ($age < 6) {
    print "You are before school\n";
} elsif ($age < 18) {
    print "You must go to school\n";
} elsif ($age < 23) {
    print "In most countries you can vote.\n";
} else {
    print "You can drink alcohol in the USA\n";
}

