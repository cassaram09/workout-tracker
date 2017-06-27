# Workout Tracker

A simple browser based application that allows users to track their workouts. It uses a Rails 5 API server to generate JSON endpoints. React will be used to for client side rendering of data. The application will be fully responsive and designed to work primarily in mobile web browsers. For that reason, the app will need to be lightweight and fast so it doesn't consume a lot of the user's power or data. 

# Features

## Core Features

  Devise for Authentication - sign in with Google or Facebook using OAuth
  Paperclip for image uploading
  Admin panel ( for backend use )
  Bootstrap for design






# Architecture





## Nice to Have

  # defaults for exercises. 
    either as they are initialized or set on the user's dashboard. For example, all strength exercises are set with a default unit of repititions, lbs, and a 12 reps, 3 sets. 

  # Meal Planning
    Calculate your BMR and plan your meals out. 

  # Built in timer with alerts for tracking sets. 

  # API calls to 



## Models

  User
    - name str 
    - email str
    - age int
    - weight int
    - height int
    - gender str
    - BMR int
    - smoker bool
    - drinker bool
    - vegetarian bool
    - profile_image
    - has_many Routines
    - has_many Workouts
    - has_many :notes, through :workouts

  Exericse
    - name
    - belongs_to category

  Equipment
    - name

  Repitition_Unit
    - enum [Kilometers, Miles, Minutes, Repititions, Seconds, Until Failure]

  Exercise_Category 
    - name
    - has_many exercises

  Equipment_Category 
    - name
    - has_many equipments

  Workout ( a collection of exercises )
    - name ( eg Chest / Tris)
    - has_many exercises
    - belongs_to Routine
    - date
    - start_time
    - end_time

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




