class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save()
      render json: @exercise
    end
  end

  def show
    @exercise = Exercise.find(params[:id])
    render json: @exercise
  end

  def update
    @exercise = Exercise.find(exercise_params[:id])
    if @exercise.update(exercise_params)
      render json: @exercise
    end
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    if @exercise.delete
      render json: @exercise
    end
  end

  private
  def exercise_params
    params.require(:exercise).permit(:id, :name, :rest_time, exercise_sets_attributes: [:repititions])
  end
end
