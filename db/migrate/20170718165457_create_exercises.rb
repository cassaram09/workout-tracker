class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :rest_time
      

      t.timestamps
    end
  end
end
