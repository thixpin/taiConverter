function zTai_Uni(input) {

   var output=input;
   
   var tallAA = "\u102B";
   var AA = "\u102C";
   var vi = "\u102D";
   var ii = "\u102E";
   var u = "\u102F";
   var uu = "\u1030";
   var ve = "\u1031";
   var ai = "\u1032";
   var ans = "\u1036";
   var db = "\u1037";
   var visarga = "\u1038";
   var asat = "\u103A";
   var ya = "\u103B";
   var ra = "\u103C";
   var wa = "\u103D";
   var ha = "\u103E";
   var zero = "\u1040";
 
    output =  output.replace( /\u106A/g, " \u1009");
   output =  output.replace( /\u1025(?=[\u1039\u102C])/g, "\u1009"); //new
   output =  output.replace( /\u1025\u102E/g, "\u1026"); //new
   output =  output.replace( /\u106B/g, "\u100A");
   output =  output.replace( /\u1090/g, "\u101B");
   output =  output.replace( /\u1040/g, zero);
   output =  output.replace( /\u108F/g, "\u1014");
   output =  output.replace( /\u1012/g, "\u1012");
   output =  output.replace( /\u1013/g, "\u1013");
   output =  output.replace( /[\u103D\u1087]/g, ha);
   output =  output.replace( /\u103C/g, wa);
   output =  output.replace( /[\u103B\u107E\u107F\u1080\u1081\u1082\u1083\u1084]/g, ra);
   output =  output.replace( /[\u103A\u107D]/g, ya);
   output =  output.replace( /\u103E\u103B/g, ya + ha);
   output =  output.replace( /\u108A/g, wa + ha);
   output =  output.replace( /\u103E\u103D/g, wa + ha);
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u1064/g, "\u1064$1$2$3");
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108B/g, "\u1064$1$2$3\u102D");
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108C/g, "\u1064$1$2$3\u102E");
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108D/g, "\u1064$1$2$3\u1036");
   output =  output.replace( /\u105A/g, tallAA + asat);
   output =  output.replace( /\u108E/g, vi + ans);
   output =  output.replace( /\u1033/g, u);
   output =  output.replace( /\u1034/g, uu);
   output =  output.replace( /\u1088/g, ha+u);
   output =  output.replace( /\u1089/g, ha+uu);
   output =  output.replace( /\u1039/g, "\u103A");
   output =  output.replace( /[\u1094\u1095]/g, db);

   output =  output.replace( /([\u1000-\u1021])([\u102C\u102D\u102E\u1032\u1036]){1,2}([\u1060\u1061\u1062\u1063\u1065\u1066\u1067\u1068\u1069\u1070\u1071\u1072\u1073\u1074\u1075\u1076\u1077\u1078\u1079\u107A\u107B\u107C\u1085])/g, "$1$3$2");  //new

   output =  output.replace( /\u1064/g, "\u1004\u103A\u1039");
   output =  output.replace( /\u104E/g, "\u104E\u1004\u103A\u1038");
   output =  output.replace( /\u1086/g, "\u103F");
   output =  output.replace( /\u1060/g, '\u1039\u1000');
   output =  output.replace( /\u1061/g, '\u1039\u1001');
   output =  output.replace( /\u1062/g, '\u1039\u1002');
   output =  output.replace( /\u1063/g, '\u1039\u1003');
   output =  output.replace( /\u1065/g, '\u1039\u1005');
   output =  output.replace( /[\u1066\u1067]/g, '\u1039\u1006');
   output =  output.replace( /\u1068/g, '\u1039\u1007');
   output =  output.replace( /\u1069/g, '\u1039\u1008');
   output =  output.replace( /\u106C/g, '\u1039\u100B');
   output =  output.replace( /\u1070/g, '\u1039\u100F');
   output =  output.replace( /[\u1071\u1072]/g, '\u1039\u1010');
   output =  output.replace( /[\u1073\u1074]/g, '\u1039\u1011');
   output =  output.replace( /\u1075/g, '\u1039\u1012');
   output =  output.replace( /\u1076/g, '\u1039\u1013');
   output =  output.replace( /\u1077/g, '\u1039\u1014');
   output =  output.replace( /\u1078/g, '\u1039\u1015');
   output =  output.replace( /\u1079/g, '\u1039\u1016');
   output =  output.replace( /\u107A/g, '\u1039\u1017');
   output =  output.replace( /\u107B/g, '\u1039\u1018');
   output =  output.replace( /\u107C/g, '\u1039\u1019');
   output =  output.replace( /\u1085/g, '\u1039\u101C');
   output =  output.replace( /\u106D/g, '\u1039\u100C');
   output =  output.replace( /\u1091/g, '\u100F\u1039\u100D');
   output =  output.replace( /\u1092/g, '\u100B\u1039\u100C');
   output =  output.replace( /\u1097/g, '\u100B\u1039\u100B');
   output =  output.replace( /\u106F/g, '\u100E\u1039\u100D');
   output =  output.replace( /\u106E/g, '\u100D\u1039\u100D');
   output =  output.replace( /(\u103C)([\u1000-\u1021])(\u1039[\u1000-\u1021])?/g, "$2$3$1");
   output =  output.replace( /(\u103E)(\u103D)([\u103B\u103C])/g, "$3$2$1");
   output =  output.replace( /(\u103E)([\u103B\u103C])/g, "$2$1");

   //Normalize
   

   output =  output.replace( /(\u103D)([\u103B\u103C])/g, "$2$1");
   output =  output.replace( /\u1050/g, "\u1075"); //shan ka
    output =  output.replace( /\uAA00/g, "\u1075"); //shan ka
    output =  output.replace( /\uAA01/g, "\u1076"); //shan kha
    output =  output.replace( /\uAA02/g, "\u1077"); //shan ga
    output =  output.replace( /\uAA03/g, "\u19E0"); //shan gha
    output =  output.replace( /\uAA05/g, "\u1078"); //shan ca
    output =  output.replace( /\uAA06/g, "\u19E1"); //shan cha
    output =  output.replace( /\uAA07/g, "\u1079"); //shan ja
    output =  output.replace( /\uAA08/g, "\u19E2"); //shan jha
    output =  output.replace( /\uAA09/g, "\u107A"); //shan nya
    output =  output.replace( /\uAA0A/g, "\uAA66"); //shan dot_ta
    output =  output.replace( /\uAA0B/g, "\uAA67"); //shan dot_tha
    output =  output.replace( /\uAA0C/g, "\u1968"); //shan dot_da
    output =  output.replace( /\uAA0D/g, "\u1969"); //shan dot_dha
    output =  output.replace( /\uAA0E/g, "\u19E3"); //shan dot_na
    output =  output.replace( /\uAA11/g, "\u107B"); 
    output =  output.replace( /\uAA12/g, "\u196A"); 
    output =  output.replace( /\uAA13/g, "\u107C"); 
    output =  output.replace( /\uAA15/g, "\u107D");
    output =  output.replace( /\uAA16/g, "\u107F"); 
    output =  output.replace( /\uAA17/g, "\u19E4");
    output =  output.replace( /\uAA18/g, "\u107E");
    output =  output.replace( /\uAA1F/g, "\u1081");
    output =  output.replace( /\uAA20/g, "\u106E");
    output =  output.replace( /\uAA21/g, "\u1022");
    output =  output.replace( /\uAA23/g, "\u1083");
    output =  output.replace( /\uAA24/g, "\u1062");
    output =  output.replace( /\uAA2C/g, "\u1084");
    output =  output.replace( /\uAA2E/g, "\u1082");
    output =  output.replace( /\uAA2F/g, "\u1086");
    output =  output.replace( /\uAA30/g, "\u1085");
    output =  output.replace( /\uAA31/g, "\u1035");
    output =  output.replace( /\uAA32/g, "\u1087");
    output =  output.replace( /\uAA33/g, "\u1088");
    output =  output.replace( /\uAA34/g, "\u1038");
    output =  output.replace( /\uAA35/g, "\u1089");
    output =  output.replace( /\uAA36/g, "\u108A");
    output =  output.replace( /\uAA37/g, "\u0133");
    output =  output.replace( /\uAA38/g, "\uA9E6");
    output =  output.replace( /\uAA39/g, "\u101B\u102F");
    output =  output.replace( /\uAA3A/g, "\u102B\u1030");
    output =  output.replace( /\uAA3B/g, "\u1090");
    output =  output.replace( /\uAA3C/g, "\u1091");
    output =  output.replace( /\uAA3D/g, "\u1092");
    output =  output.replace( /\uAA3E/g, "\u1093");
    output =  output.replace( /\uAA3F/g, "\u1094");
    output =  output.replace( /\uAA40/g, "\u1095");
    output =  output.replace( /\uAA41/g, "\u1096");
    output =  output.replace( /\uAA42/g, "\u1097");
    output =  output.replace( /\uAA43/g, "\u1098");
    output =  output.replace( /\uAA44/g, "\u1099");
        
      //   <!-- Normalize Tai-->
    output =  output.replace( /\u1086\u1082/g, "\u1082\u1086");
    output =  output.replace( /\u103A\u1082/g, "\u1082\u103A");
    output =  output.replace( /\u1086\u103D/g, "\u103D\u1086");
    output =  output.replace( /\u1086\u1062/g, "\u1062\u1086");
    output =  output.replace( /\u1030\u102D/g, "\u102D\u1030");
    output =  output.replace( /\u102F\u102D/g, "\u102D\u102F");
    
   //  <!-- Normalize Shan E + YYa & RRa-->
    output =  output.replace( /(\u1031)([\u1075-\u1079])(\u1031)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\u107A-\u107F])(\u1031)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\u1080-\u1081])(\u1031)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\uA9E0-\uA9E4])(\u1031)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\uAA60-\uAA6F])(\u1031)/g, "$2$3$1");
    
    output =  output.replace( /(\u1031)([\u1075-\u1079])(\u103C)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\u107A-\u107F])(\u103C)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\u1080-\u1081])(\u103C)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\uA9E0-\uA9E4])(\u103C)/g, "$2$3$1");
    output =  output.replace( /(\u1031)([\uAA60-\uAA6F])(\u103C)/g, "$2$3$1");
    
    output =  output.replace( /(\u1031)([\u1075-\u1079])(\u102F)/g, "$2$1\u1083");
    output =  output.replace( /(\u1031)([\u107A-\u107F])(\u102F)/g, "$2$1\u1083");
    output =  output.replace( /(\u1031)([\u1080-\u1081])(\u102F)/g, "$2$1\u1083");
    output =  output.replace( /(\u1031)([\uA9E0-\uA9E4])(\u102F)/g, "$2$1\u1083");
    output =  output.replace( /(\u1031)([\uAA60-\uAA6F])(\u102F)/g, "$2$1\u1083");
    
    output =  output.replace( /(\u1031)([\u1075-\u1079])/g, "$2$1");
    output =  output.replace( /(\u1031)([\u107A-\u107F])/g, "$2$1");
    output =  output.replace( /(\u1031)([\u1080-\u1081])/g, "$2$1");
    output =  output.replace( /(\u1031)(\u1022)/g, "\u1022\u1031");
    output =  output.replace( /(\u1031)([\uA9E0-\uA9E4])/g, "$2$1");
    output =  output.replace( /(\u1031)([\uAA60-\uAA6F])/g, "$2$1");
    
      //   <!-- Normalize Shan EE-->
    output =  output.replace( /(\u1084)([\u1075-\u1079])/g, "$2$1");
    output =  output.replace( /(\u1084)([\u107A-\u107F])/g, "$2$1");
    output =  output.replace( /(\u1084)([\u1080-\u1081])/g, "$2$1");
    output =  output.replace( /(\u1084)([\u1000-\u1022])/g, "$2$1");
    output =  output.replace( /(\u1084)([\uA9E0-\uA9E4])/g, "$2$1");
    output =  output.replace( /(\u1084)([\uAA60-\uAA6F])/g, "$2$1");
    
   //  <!-- Crazy Mistake Corrector-->
    output =  output.replace( /([\u1075-\u1081])(\u102F)([\u1087-\u108A])/g, "$1\u1083$3");
    output =  output.replace( /([\u107A-\u107F])(\u102F)([\u1087-\u108A])/g, "$1\u1083$3");
    output =  output.replace( /([\u1075-\u1081])(\u102F)(\u1038)/g, "$1\u1083\u1038");
    output =  output.replace( /([\u107A-\u107F])(\u102F)(\u1038)/g, "$1\u1083\u1038");
    output =  output.replace( /([\u1000-\u1022])(\u102F)([\u1087-\u108A])/g, "$1\u1083$3");
    output =  output.replace( /([\u1000-\u1022])(\u102F)(\u1038)/g, "$1\u1083\u1038");
    

   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F]))(\u1040)(?=\u0020)?/g, function($0, $1)
   
   {
      return $1 ? $1 + '\u101D' : $0 + $1;
   }

   );

   output = output.replace(/((\u101D))(\u1040)(?=\u0020)?/g, function($0, $1)

   {
      return $1 ? $1 + '\u101D' : $0 + $1;
   }
   );

   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020]))(\u1047)/g, function($0, $1)

   {
      return $1 ? $1 + '\u101B' : $0 + $1;
   }
   );

   output =  output.replace( /(\u1047)( ? = [\u1000 - \u101C\u101E - \u102A\u102C\u102E - \u103F\u104C - \u109F\u0020])/g, "\u101B");

   output =  output.replace( /(\u1031)?([\u1000-\u1021])(\u1039[\u1000-\u1021])?([\u102D\u102E\u1032])?([\u1036\u1037\u1038]{0,2})([\u103B-\u103E]{0,3})([\u102F\u1030])?([\u1036\u1037\u1038]{0,2})([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$9$7$5$8");

   output = output.replace(ans+u, u+ans);

   output =  output.replace( /(\u103A)(\u1037)/g, "$2$1");

   return output;

}