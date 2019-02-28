require 'rails_helper'

RSpec.describe Customer, type: :model do

  it { should have_many(:dwellings).dependent(:destroy)}
  it { should have_many(:postal_addresses).through(:dwellings)}
  it { should have_many(:orders)}
  it { should have_many(:purchases).through(:orders)}
  it { should have_many(:purchased_items).through(:purchases).source(:item)}

end
