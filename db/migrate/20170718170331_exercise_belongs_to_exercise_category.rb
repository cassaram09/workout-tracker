class ExerciseBelongsToExerciseCategory < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :exercise_category_id, :integer
  end
end
