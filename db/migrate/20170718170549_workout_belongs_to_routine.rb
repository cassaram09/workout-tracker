class WorkoutBelongsToRoutine < ActiveRecord::Migration[5.0]
  def change
    def change
      add_column :workouts, :routine_id, :integer
    end
  end
end
