grammar CQL;

parse: value;

value
  : BOOLEAN
  ;

BOOLEAN
  : 'true'
  | 'false'
  ;
