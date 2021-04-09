import unittest

class Test1(unittest.TestCase):
    def test_alex(self):
        a = 'alex'
        self.assertEqual(a,'alex')

    def test_ale(self):
        a = 10
        return a

    def test_all(self):
        b = Test1.test_ale(self)
        self.assertEqual(b,100)

    

if __name__ == '__main__':
    unittest.main()