# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_28_203440) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "applicants", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.bigint "dob"
    t.string "employment_status"
    t.boolean "has_pets"
    t.integer "landlord_id"
    t.string "token"
    t.boolean "submitted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "application_properties", force: :cascade do |t|
    t.string "form_type"
    t.string "theme_color_hex"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "landlords", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "secrets", force: :cascade do |t|
    t.string "ssn"
    t.string "mmn"
    t.integer "applicant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
