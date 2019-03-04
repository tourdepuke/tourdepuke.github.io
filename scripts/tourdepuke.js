function randomize(a){
	var aCount = a.length;
	for (var i = aCount-1 ; i >= 0; --i)
	{
	        if (i > 0){
	                var intRandom = Math.round(Math.random()*i); 
	                ArraySwitch(a,intRandom,i);
	        }
	}
	return a;
}

function ArraySwitch(p_array, p_idxA, p_idxB){
        var temp = p_array[p_idxA];
        p_array[p_idxA] = p_array[p_idxB];
        p_array[p_idxB] = temp;
        return;
}


function displayPic(picUrls,idx){
	if (idx < picUrls.length){
		$('.picTable').append('<tr><td><img src="img/pics/' + picUrls[idx] + '"/></td></tr>');
		displayPic(picUrls,idx + 1);
	} 
	
	
	
}
