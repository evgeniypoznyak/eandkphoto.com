export interface ISlider {
  id: number,
  src: string,
  header: any,
  headerAnimation: any,
  paragraph: any,
  paragraphAnimation: any,
  button: any,
  buttonAnimation: any,
  pictureAnimation: any
}


/*
            $table->increments('id');
            $table->text('src'); // maybe binary string
            $table->string('header')->nullable();
            $table->string('header_animation')->default('default');
            $table->string('paragraph')->nullable();
            $table->string('paragraph_animation')->default('default');;
            $table->string('button')->nullable();
            $table->string('button_animation')->default('default');;
            $table->string('picture_animation')->default('default');;
 */
