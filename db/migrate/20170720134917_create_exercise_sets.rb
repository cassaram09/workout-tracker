class CreateExerciseSets < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_sets do |t|
      t.belongs_to :exercise
      t.integer :repititions
      
      t.timestamps
    end
  end
end
