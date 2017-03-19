def openOrSenior(data)
  data.map { |age, hc| ( age < 55 || hc <= 7 ? 'Open' : 'Senior' ) }
end

def openOrSenior(data)
    result = []
    data.each do |age, hc|
        if age < 55 || hc <= 7
            result << 'Open'
        else
            result << 'Senior'
        end
    end
    return result
end