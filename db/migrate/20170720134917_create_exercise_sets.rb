class CreateExerciseSets < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_sets do |t|
      t.integer :exercise_id
      t.integer :repititions
      
      t.timestamps
    end
  end
end
