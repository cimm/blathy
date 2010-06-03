require 'test_helper'

class HomeControllerTest < ActionController::TestCase

  test "should get show" do
    get :index
    assert_response 200
    assert_template 'index'
    assert_tag :tag => 'h1', :content => "Blathy"
  end
  
  test "all utilities in the fixtures should be loaded on the first page" do
    get :index
    assert_template 'index'
    assert_tag :tag => 'span', :attributes => {:class => 'label'}, :content => "Water"
    assert_tag :tag => 'span', :attributes => {:class => 'label'}, :content => "Gas"
    assert_tag :tag => 'span', :attributes => {:class => 'label'}, :content => "Electricity day"
    assert_tag :tag => 'span', :attributes => {:class => 'label'}, :content => "Electricity night"
    assert_tag :tag => 'span', :attributes => {:class => 'label'}, :content => "Solar"
  end
  
  test "there should be at no solar readings for May so the homepage should have a warning icon" do
    Delorean.time_travel_to("2010-05-20") do
      get :index
      assert_template 'index'
      assert_tag :tag => 'li', :attributes => {:class => 'arrow warning'}, :content => "Solar"
    end
  end

end
