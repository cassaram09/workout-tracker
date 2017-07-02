# Workout Tracker

A simple browser based application that allows users to track their workouts. It uses a Rails 5 API server to generate JSON endpoints. React will be used to for client side rendering of data. The application will be fully responsive and designed to work primarily in mobile web browsers. For that reason, the app will need to be lightweight and fast so it doesn't consume a lot of the user's power or data. 

# Features

## Core Features

  Redux-Auth for authentication https://github.com/lynndylanhurley/redux-auth
  Paperclip for image uploading
  Admin panel ( for backend use )
  Bootstrap for design
  Progress graphs
    - body weight
    - bmr
    - body fat %
    - weight / reps for strength exercises
    - time / distance for cardio exercises


# Architecture

  Home 
    - home page if logged out
    - dashboard if logged in
  Exercise
    - current routine
    - link to archived routines
    - link to create new routine
    - link to creating new workout
    - list all workouts for this week, completed and incompleted. clicking on a workout will take you to the workout details page.
      - Workout Detail

      New Workout Form
        - Select exercise and set sets, reps, and rest time
        - optional: add directly to Routine

      New Routine Form
        - assign workout to day of week (optional: time)
        - repeat ( length of time routine should repeat: eg 8 weeks)

  Profile
    - modify user data
    - defaults for exercises and nutrition (measurement units, reps)
    - log in / out


  Reports
    - graphs for strength, cardio, body weight, etc.


  Nutrition
    - current nutrition plan
    - index of nutrition plans
    - add nutrition plans
      - meals
      - ingredients


  



## Nice to Have

  # defaults for exercises. 
    either as they are initialized or set on the user's dashboard. For example, all strength exercises are set with a default unit of repititions, lbs, and a 12 reps, 3 sets. 

  # Meal Planning
    Calculate your BMR and plan your meals out. 

  # Built in timer with alerts for tracking sets. 

  # API calls to Nutrition Database USDA

  # export to CSV or Excel

  # circuits and supersets

  # add exercises to workout on the fly 



## Models

  User
    - name str 
    - email str
    - age int
    - weight int
    - height int
    - gender str
    - body_fat int 
    - BMR int
    - smoker bool
    - drinker bool
    - vegetarian bool
    - profile_image
    - has_many Routines
    - has_many Workouts
    - has_many :notes, through :workouts

  Exericse
    - name str
    - rest_time
    - has_many sets
    - belongs_to category

  Set
    - repititions int

  Repitition_Unit
    - enum [Kilometers, Miles, Minutes, Repititions, Seconds, Until Failure]

  Exercise_Category 
    - name
    - has_many exercises

  Circuit ( multiple exercises completed in succession )
    - name
    - has_many exercises
    - rest_time

  Workout ( a collection of exercises )
    - name ( eg Chest / Tris)
    - has_many exercises
    - belongs_to Routine
    - date
    - start_time
    - end_time
    - average_rest_time

  Routine ( a collection of workouts )
    - name ( eg strength training )
    - has_many workouts
    - start_date
    - end_date

  Comment / Note
    - text 
    - belongs_to workout

  Nutrition_Plan
    - name
    - description
    - meal_count
    - start_date
    - end_date
    - has_many meals

  Meal
    - name 
    - description
    - time
    - has_many ingredients

  Ingredient
    - name
    - unit 
    - calories
    - fat 
    - protein
    - carbohydrates
    - sugar
    - fiber
    - sodium
    - belongs_to meal




