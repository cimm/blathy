require 'test_helper'

class HomeControllerTest < ActionController::TestCase

  test "should get show" do
    get :index
    assert_template 'index'
    assert_tag :tag => 'h1', :content => "Blathy"
  end

end