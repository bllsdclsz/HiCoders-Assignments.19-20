var c = [10,83,100,1000]; // do not touch this!
              var processed = []; 
              var index=0;
              while(index < c.length){
                if(c[index]<=100){
                    processed.push(c[index]);
                 }
                 index = index + 1;  
              } 
              console.log(processed)
