use strict;
use warnings;
use 5.010;
use Data::Dumper;

my @names = qw(Foo Bar Baz);
my @languages = qw(Perl Python Ruby PHP);

splice @names, 1, 0, @languages;

print Dumper \@names;
