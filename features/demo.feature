Feature: i am going to validate reactive form
 Scenario Outline:  navigate to calculator site test
    Given I navigate to "calculator" page
    When I add two numbers "<no1>" and "<no2>"
    Then result should be "<result>"
Examples:
| no1 | no2 | result |
| 2  | 3  | 5  |
| 4  | 6  | 10  |
| 8  | 9  | 17  |
| 7  | 9  | 16  |
| 9  | 9  | 18  |

 Scenario Outline:  navigate to reactiveform page
    Given I navigate to "reactiveform" page
    When I click on submit
    And fill title "<title>"
    And fill firstname "<firstname>"
    And fill lastname "<lastname>"
    And fill email "<email>"
    And fill password "<password>"
    And fill confirmpassword "<confirmpassword>"
    And click acceptTerms
    Then submit form
    Examples:
    | title | firstname | lastname | email | password | confirmpassword |
    | Mr  | govinda  | raju  | govinda@rpwebapps.in  | 123456 | 123456 |
    | Mr   | naresh  | b  | naresh@rpwebapps.com  | rpweb | rpweb |
    | Mr   | mallesh  | t  | mallesh@rpwebapps.com  | 12345678 | 12345678 |
    | Mr   | mahendar  | e  | mahendar@rpwebapps.com  | rpweb123 | rpweb123 |
    | Mrs   | Sravanthi  | t  | sravanthi@rpwebapps.com  | rpweb123 | rpweb123 |

