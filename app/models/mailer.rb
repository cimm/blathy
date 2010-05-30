class Mailer < ActionMailer::Base

  def new_month_warning(receiver)
    recipients receiver
    from "Blathy"
    subject "Don't forget to registered you Blathy readings"
    body "It's the first of the month, Blathy wonders if you registered your readings yet."
  end

end