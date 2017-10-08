

//function for reverse triangle

      const stars = function(num){
        if(num<=0){
          return "";
        }
      return "*"+ stars(num-1);
      };


      const spaces = function(n){
        if(n===0){
          return "";
        }
        return " "+ spaces(n-1);
      };



      const triangleStars = function(k){

        const looper = function(g){

          if(g===0)
            return "";

          console.log(spaces(k-g)+stars(2*g-1));
          return looper(g-1);
        };

      return looper (k);
      };

      console.log(triangleStars(50));




//function for calculating a power
      
      const pow = function(base, n){
        if(n<=0 || base<=1){
          return 1;
        }

        return base* pow(base, n-1);
      };

      console.log(pow(2,3));      





     

// function which reverses a string

      const reverse = function(str){


        const ind = function(str, index){

          if (index<0)
            return "";

          return str[index]+ind(str, index-1);
        };


        return ind(str, str.length-1);
      };

      console.log(reverse("ani"));






//great function for checkerboard

      const printer = function( num, isSpace){
        if(num===0)
          return "";

        if(isSpace) {
          return " " + printer(num, !isSpace);
        } else {
          return "*" + printer(num-1,!isSpace);
        }
      };


      const mix = function (given, changing, isSpace){
        if(changing===0)
          return "";

        console.log( printer(given, isSpace) );
        return mix(given, changing-1, !isSpace);
      };


      const checkerboard = function(m){
        mix(m, m, false);
      };

      console.log(checkerboard(5));

