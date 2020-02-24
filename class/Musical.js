class Musical{
	
    prepare(){
		console.log("preparing ....")
	}
	
	/**
	 * 演奏音乐
	 */
	play(){}
}

/**
 * 钢琴
 */
class Piano extends Musical{
	play(){
		this.prepare();
		console.log("piano play....")
	}
}

/**
 * 吉他
 */
class Guitar extends Musical{
	play(){
		this.prepare();
		console.log("guitar play....")
	}
}

var a1 = new Piano();
a1.play();

